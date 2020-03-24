using System;
using System.Net;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace DownloadPageWebClient
{
    class Program
    {
        static void Main(string[] args)
        {
            if (args.Length == 0)
            {
                Console.WriteLine("Challenge.exe <URL> <Top #> [excludeWord1 excludeWord2 excludeWord3 excludeWord4 ...]");
                Console.WriteLine("Challenge.exe https://en.wikipedia.org/wiki/Microsoft 20 and the");
                return;
            }

            ServicePointManager.Expect100Continue = true;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

            string url = args[0];
            Int16 limitBy = Int16.Parse(args[1]);
            string[] excludeWords = new string[args.Length - 2];
            for (int i = 2; i < args.Length; i++)
            {
                excludeWords[i - 2] = args[i];
            }

            using (WebClient client = new WebClient())
            {
                string section = "";
                string html = client.DownloadString(url);

                string x = "id=\"History\""; // Section Starts
                string y = "([\\S\\s]*)"; // History Section
                string z = "id=\"Corporate_affairs\""; // Section ends
                string strPattern = x + y + z;

                Regex pattern = new Regex(strPattern);
                Match match = pattern.Match(html);
                if (match.Success)
                {
                    section = match.Groups[1].Value;
                }

                string[] words = section.Split(' ');
                Dictionary<string, Int16> count = new Dictionary<string, Int16>();
                foreach (var word in words)
                {

                    if (!excludeWords.Contains(word))
                    {

                        if (count.ContainsKey(word))
                        {
                            count[word]++;
                        }
                        else
                        {
                            count.Add(word, 1);
                        }
                    }
                }

                var result = count.OrderByDescending(c => c.Value).Take(limitBy).Select(c => new { Word = c.Key, Count = c.Value });
                foreach (var item in result)
                {
                    Console.WriteLine(item);
                }
            }
        }
    }
}