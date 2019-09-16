import profilePic from "../images/profilePic.jpg";

const state = {
    postsPage: {
        posts: [
            {
                id: '1',
                name: 'Jhon Doe',
                desc: 'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a',
                image: profilePic,
            },
            {
                id: '2',
                name: 'Eduard Snow',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
                image: profilePic,
            },
            {
                id: '3',
                name: 'Thom Doe',
                desc: 'Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
                image: profilePic,
            },
        ]
    },
    messagesPage: {
        users: [{
            id: '1',
            image: profilePic,
            name: 'Jany Doe',
            message: 'Hello how are ...',
            msgCount: '3',
        },
            {
                id: '2',
                image: profilePic,
                name: 'Anny Fabacher',
                message: 'Hello whats up...',
                msgCount: '1'
            },
            {
                id: '3',
                image: profilePic,
                name: 'Jhon Snow',
                message: 'Hi guys...',
                msgCount: '2'
            },
        ],
        dialogs: [
            {
                id: '1',
                message: 'Hello how are you, please can you tell me what it is, I can not understand it',
                image: profilePic,
                status: 'send',
            },
            {
                id: '2',
                message: 'Me too, how is going your job in the office?',
                image: profilePic,
                status: 'get',
            },
            {
                id: '3',
                message: 'Hi I am fine and you?',
                image: profilePic,
                status: 'send',
            },
            {
                id: '4',
                message: 'What tpe of technologies you are use?',
                image: profilePic,
                status: 'get',
            }
        ],
    },
}
;
export default state;
