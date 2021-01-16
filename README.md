NotesAgainstOwners

Angular application for creating notes against owners/users with the following fields:
    • title – brief description
    • body – object context
    • media – optional associated media with the note such as images or video.
    • status – marked as done if set otherwise marked as “todo”
    • created – ISO 8601 date of creation
    • edited – ISO 8601 date of edition if applicable
    • deleted – status field which signifies wether note has been deleted
    • owner – object creator

I am using the smart/dumb methodology and Bootstrap for displaying the notes.
Rendering a list of combined objects in the dumb component and using respective models and services for managing the data.
Also I am using Rxjs library in this solution.

The user/owner of notes has one for multiple relationship with the notes and the admin is able to see all of them.

The FormGroup used is dinamic for the fields: title, body and media.

The login credentials are:
    //The owner of all notes
    {
        username: 'admin', 
        password: 'admin',
    },
    //Currently is the owner of two notes
    {
        username: 'userTest1', 
        password: 'userTest1',
    },
    //Currently is the owner of only one note
    {
        username: 'userTest2', 
        password: 'userTest2',
    }