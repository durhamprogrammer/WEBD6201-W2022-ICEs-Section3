class Contact
{
    // public properties (getters and setters)
    get FullName()
    {
        return this.m_fullName;
    }

    set FullName(fullName)
    {
        this.m_fullName = fullName;
    }

    get ContactNumber()
    {
        return this.m_contactNumber;
    }

    set ContactNumber(contactNumber)
    {
        this.m_contactNumber = contactNumber;
    }

    get EmailAddress()
    {
        return this.m_emailAddress;
    }

    set EmailAddress(emailAddress)
    {
        this.m_emailAddress = emailAddress;
    }

    // constructor
    constructor(fullName, contactNumber, emailAddress)
    {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }

    // public overrides
    toString()
    {
        return `Full Name     : ${this.FullName}\nContact Number: ${this.ContactNumber}\nEmail Address : ${this.EmailAddress}`;
    }
}