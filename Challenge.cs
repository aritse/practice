using System;
using System.Net;
using System.Collections.Generic;
using System.Linq;

namespace DownloadPageWebClient
{
    class Program
    {
        static void Main(string[] args)
        {
            ServicePointManager.Expect100Continue = true;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
            string url = args[0];
            Int16 limit = 10;
            using (WebClient client = new WebClient())
            {
                string html = client.DownloadString(url);
                string[] words = html.Split(' ');
                Dictionary<string, Int16> count = new Dictionary<string, Int16>();
                foreach (var word in words)
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

                var result = count.OrderByDescending(c => c.Value).Take(limit).Select(c => new { Word = c.Key, Count = c.Value });
                foreach (var item in result)
                {
                    Console.WriteLine(item);
                }
            }
        }
    }
}