import { v4 as uuidv4 } from 'uuid';
import mockUserImage1 from '../assets/images/3po.jpg';
import mockUserImage2 from '../assets/images/b1droid.jpg';
import mockUserImage3 from '../assets/images/r2d2.jpg';
import { Update, User, Comment } from '../datatypes/datatypes';

export module UpdateApi {
    export function getAll(): Update[] {

        const mockUser1: User = {
            id: "1",
            firstname: "C-3PO",
            lastname: "droid",
            image: mockUserImage1,
        };

        const mockUser2: User = {
            id: "2",
            firstname: "B1",
            lastname: "droid",
            image: mockUserImage2,
        };

        const mockUser3: User = {
            id: "3",
            firstname: "R2-D2",
            lastname: "droid",
            image: mockUserImage3,
        };

        const comment1: Comment = {
            id: "1",
            author: mockUser2,
            text: "Good good",
            createdDate: new Date("2023-10-20T09:00:00.000Z"),
            wow: 100,
            angry: 2,
        };

        const comment2: Comment = {
            id: "2",
            author: mockUser1,
            text: "Roger roger",
            createdDate: new Date("2023-10-20T09:00:00.000Z"),
            wow: 100,
            angry: 2,
        };

        const mockUpdates: Update[] = [
            {
                id: uuidv4(),
                author: mockUser1,
                title: 'Protocol Updates v1',
                text: "It\'s-A Clear Desa Separatists Made A Pact Wesa Desa Federation Du Trade. Senators, Dellow Felagates. In Response To This Direct Threat To The Republic, Mesa Propose That The Senate Immediately Provides Emergency Powers To The Supreme Chancellor.",
                comments: [comment1, comment2],
                likes: 10,
                dislikes: 5,
                createdDate: new Date("2023-10-20T09:00:00.000Z")
            },
            {
                id: uuidv4(),
                author: mockUser2,
                title: 'Protocol Updates v2',
                text: "It\'s-A Clear Desa Separatists Made A Pact Wesa Desa Federation Du Trade. Senators, Dellow Felagates. In Response To This Direct Threat To The Republic, Mesa Propose That The Senate Immediately Provides Emergency Powers To The Supreme Chancellor.",
                comments: [comment1],
                likes: 7,
                dislikes: 2,
                createdDate: new Date("2023-10-20T09:00:00.000Z")
            },
            {
                id: uuidv4(),
                author: mockUser3,
                title: 'Protocol Updates v3',
                text: "It\'s-A Clear Desa Separatists Made A Pact Wesa Desa Federation Du Trade. Senators, Dellow Felagates. In Response To This Direct Threat To The Republic, Mesa Propose That The Senate Immediately Provides Emergency Powers To The Supreme Chancellor.",
                comments: [comment2],
                likes: 6,
                dislikes: 10,
                createdDate: new Date("2023-10-20T09:00:00.000Z")
            },
        ];

        return mockUpdates;
    }
}