/*
Products are identified by alphanumeric codes. Each code is stored as a string. We have three types of products: high priority, medium priority, and low priority. Given an array of product codes, sort the array so that the highest priority products come at the beginning of the array, the medium priority products come in the middle, and the low priority products come at the end. Within a priority group, order does not matter. You are given a priority function which, given a product code, returns 1 for high, 2 for medium and 3 for low. This array may contain a large number of product codes, so do your best to minimize additional storage.

You are given this function for usage:

private int GetPriority(string productCode).

You don’t need to implement this function.

Please Implement:

public void OrderProductsByPriority(string[] productCodes)
 */


/* Brute Force by using extra Lists to keep track of high, medium and low products. Once done, concatenate them into one. */

public void OrderProductsByPriority(string[] productCodes)
{
    List<string> high = new List<string>();
    List<string> medium = new List<string>();
    List<string> low = new List<string>();

    foreach (string productCode in productCodes)
    {
        int priority = GetPriority(productCode);
        if (priority == 1)
        {
            high.Add(productCode);
        }
        if (priority == 2)
        {
            medium.Add(productCode);
        }
        if (priority == 3)
        {
            low.Add(productCode);
        }
    }
    productCodes = high.Concat(medium).Concat(low).ToList();
}

/* In place using two pointers. Loop over all product codes. If we encounter a high priority product, we place it at the high pointer.
If we encounter a low priority product, we place it at the low pointer. If we encounter a medium priority product, don't do anything.
Eventually, all the medium priority products will be left in between high and low. */

public void OrderProductsByPriority(string[] productCodes)
{
    int high = 0;
    int low = productCodes.Length - 1;

    for (int i = 0; i < productCodes.Length; i++)
    {
        int priority = GetPriority(productCodes[i]);
        if (priority == 1)
        {
            string temp = productCodes[high];
            productCodes[high] = productCodes[i];
            productCodes[i] = temp;
            high++;
        }
        if (priority == 3)
        {
            string temp = productCodes[low];
            productCodes[low] = productCodes[i];
            productCodes[i] = temp;
            low--;
        }
    }
}

