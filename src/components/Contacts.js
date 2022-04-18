import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import fireDb from "../firebase";
import firebase from "../firebase";


const Contacts = () => {
    var [contactObjects, setContactObjects] = useState({});
    var [currentId, setCurrentId] = useState('');

    useEffect(() => {
        fireDb.child('contacts').on('value', snapshot => {
            if (snapshot.val() != null)
                setContactObjects({
                    ...snapshot.val()
                })
            else
                setContactObjects({})

        })
    }, [])// similar to componentDidMount

    const [searchTerm, setSearchTerm]=useState('')

    const addOrEdit = obj => {
        if (currentId == '')
            fireDb.child('contacts').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        else
            fireDb.child(`contacts/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
    }

    const onDelete = key => {
        if (window.confirm('Are you sure to delete this record?')) {
            debugger
            fireDb.child(`contacts/${key}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        }
    }

 
    return (
        <>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <img src="bootstrap-stack.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
                    INDIVIDUAL REGISTRY
                </a>
                </nav>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                
                    <h1 className="display-4 text-center">USER REGISTRATION</h1>
                    <img src="non.png" class="rounded mx-auto d-block" alt="Me"/>
                </div>
            </div>
            <div className="jumbotron jumbotron-fluid" align="center text-center"  >
                   <span align="center" > <ContactForm {...({ addOrEdit, currentId, contactObjects })} /></span>
                </div>
                <div id="form1" class="input-group col-md">
               <span><input id="filter" type="text" class="form-control" placeholder="Search" aria-label="" aria-describedby="basic-addon1"
               onChange={(event) => {setSearchTerm(event.target.value);}}
               />
               </span> </div>

            <div className="row">
                <div className="col-md" class ="table-responsive">
                    <table className="table table-striped">
                        <thead className="thead-light" class="table-dark">
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Middle Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map(id => {
                                    return <tr key={id}>
                                        <td>{contactObjects[id].fName}</td>
                                        <td>{contactObjects[id].lName}</td>
                                        <td>{contactObjects[id].mName}</td>
                                        <td>{contactObjects[id].mobile}</td>
                                        <td>{contactObjects[id].email}</td>
                                        <td>{contactObjects[id].address}</td>
                                        <td>
                                            <a className="btn text-primary" onClick={() => { setCurrentId(id) }}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-danger" onClick={() => { onDelete(id) }}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </>
      
    );
}

export default Contacts;