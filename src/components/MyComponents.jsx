import { CountContainer } from "./Counter";
import User from "./User";
import HwUser from './HwUser'

export const MyComponents = {
    Header: (props) => {
        return (
            <header className="App-header">
                <img src={props.logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <CountContainer />
            </header>
        )
    },
    Body: () => <h1>This is body</h1>,
    Section: (props) => {
        return (
            <section>
                <p>{props.text}</p>
                {
                    props.isDefault
                        ? (
                            <div>This is default</div>
                        ) : (
                            <div>This is not default</div>
                        )
                }
                {
                    !props.isDefault && <h3>Hi</h3>
                }
                <span>{props.count}</span>
                <div>
                    <h3>Info about user</h3>
                    <p>Name: {props.user.name}</p>
                    <p>Age: {props.user.age}</p>
                </div>
                <div>{props.data}</div>
            </section>
        )
    },
    Users: () => {
        const users = [
            {
                id: 1,
                name: 'John',
                age: 12
            },
            {
                id: 2,
                name: 'Kate',
                age: 23
            },
            {
                id: 3,
                name: 'Bob',
                age: 33
            }
        ];

        return (
            <>
                <h3>Info about users</h3>
                <ul>
                    {
                        users.map((item) =>
                            <User key={item.id} user={item}/>
                        )
                    }
                </ul>
            </>
        )
    },
    HwUsers: () => {
        const users = [
            { id: 1, firstName: "John", lastName: "Doe", age: 24, job: "Developer"},
            { id: 2, firstName: "Kate", lastName: "Reton", age: 22, job: "Chef"},
            { id: 3, firstName: "Melissa", lastName: "Lout", age: 41, job: "Developer"},
            { id: 4, firstName: "Ann", lastName: "Willington", age: 23, job: "Driver"},
            { id: 5, firstName: "Michel", lastName: "Plank", age: 55, job: "Developer"},
            { id: 6, firstName: "Bob", lastName: "Palanski", age: 32, job: "Waiter"},
            { id: 7, firstName: "Jack", lastName: "Daniels", age: 23, job: "Developer"},
            { id: 8, firstName: "Poul", lastName: "Torn", age: 65, job: "Cashier"},
        ];
        return (
            <>
                <h3>Info about users (Homework)</h3>
                <ul>
                    {
                        users.map((item) =>
                            <HwUser key={item.id} user={item}/>
                        )
                    }
                </ul>
            </>
        )
    }
};
