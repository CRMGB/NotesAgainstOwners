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

I am using the smart/dumb methodology, Bootstrap for displaying the notes.
Rendering a list of combined objects in the dumb component and using respective models and services for managing the data.
Also I am using Rxjs library in this solution.
