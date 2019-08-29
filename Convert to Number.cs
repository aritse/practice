/*
public static bool ConvertToNumber(string str)

{

bool canConvert = false;

try

{

int n = Int16.Parse(str);

if (n != 0)

{

canConvert = true;

}

}

catch (Exception ex)

{

}

bool retval = false;

if (canConvert == true)

{

retval = true;

}

return retval;

}
 */



public static int ConvertToNumber(string str)
{
    int n;
    try
    {
        n = Int16.Parse(str);
    }
    catch (Exception ex)
    {
        throw (ex);
    }
    return n;
}

/*

Issues and limitations:

1. The function return type should be int instead of bool because the function name suggests that it takes in a string parameter and returns a number.
2. The catch block should throw an exception if the parse method fails.
3. The bool variables canConvert and retVal are unnecessary.
4. The function should return n which is the parsed int.
5. The function shouldn't fail on input '0'.
6. The function can handle character set that can be represented with 16 bits that is UTF-16.
 */
