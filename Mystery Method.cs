/*
Describe what the Mystery method does and discuss any potential bugs and possible fixes.
*/

/*
1. Change member names to lowercase by convention.
2. Change member accessor to private for OOD best practices.
3. Remove "name" from the exception messages since name is null or whitespace and adds nothing useful.
4. Change Stack<Person> to Stack<P> because there is no Person type.
5. Change person.Name.Equals(name)) to person.name.Equals(name)) as we have previously renamed it to lowercase.
6. Change do .. while to while because acquaintances array can be empty.
7. The Mystery function returns true if 'name' is my acquaintance and false otherwise.
8. The function creates a generic stack object of P, pushes all my acquaintances first and the pops them one by one until 'name' is found.
 */

public class P
{
    private string name;
    private P[] acquaintances;

    public P(string name, P[] acquaintances)
    {
        if (String.IsNullOrWhiteSpace(name))
        {
            throw new ArgumentException("Name cannot be null or white space.");
        }
        this.name = name;
        this.acquaintances = acquaintances;
    }

    public bool Mystery(string name)
    {
        if (String.IsNullOrWhiteSpace(name))
        {
            throw new ArgumentException("Name cannot be null or white space.");
        }

        Stack<P> myStack = new Stack<P>();
        foreach (P acquaintance in this.acquaintances)
        {
            myStack.Push(acquaintance);
        }

        while (myStack.Count > 0)
        {
            var person = myStack.Pop();
            if (person.name.Equals(name))
            {
                return true;
            }
        };
        return false;
    }
}