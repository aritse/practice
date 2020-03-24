using System;
using System.Net;
using System.Collections.Generic;
using System.Linq;
using static System.Windows.Forms.HtmlElement;

namespace DownloadPageWebClient
{
    class Program
    {
        static void Main(string[] args)
        {
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
                string html = client.DownloadString(url);
                // HtmlElement el = GetElementById("History");
                // Console.WriteLine(el);

                string[] words = html.Split(' ');
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