import React, {useState, useEffect} from 'react';

const ContactForm = (props) => {


    const initialFieldValues = {
        fName: '',
        lName: '',
        mName: '',
        address: '',
        email: '',
        mobile: ''
    }

    var [values, setValues] = useState(initialFieldValues)
    

    useEffect(() => {
        if (props.currentId == '')
            setValues({
                ...initialFieldValues
            })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])


    const handleInputChange = e => {

        var {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }

    
    return (
        
        <form autoComplete="off" onSubmit={handleFormSubmit}>
                
                <div className="form-group input-group col-md-4">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i className="fa fa-user"/></span>
                    <input type="text" className="form-control" placeholder="First Name" name="fName"
                    value={values.fName} 
                    onChange={handleInputChange} required
                    />
                    
                    <input type="text" className="form-control" placeholder="Last Name" name="lName"
                    value={values.lName} 
                    onChange={handleInputChange} required
                    />
                    
                    <input type="text" className="form-control" placeholder="Middle Name" name="mName"
                    value={values.mName} 
                    onChange={handleInputChange} required
                    />
                </div>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text"><i className="fa fa-envelope"/></span>
                    <input type="text" class="form-control" placeholder="Email" aria-label="Email" name="email"
                    value={values.email}
                    onChange={handleInputChange} required
                    />
                    <span class="input-group-text"><i className="fa fa-mobile-alt"/></span>
                    <input type="text" class="form-control" placeholder="Mobile No." aria-label="Server" name="mobile"
                    value={values.mobile}
                    onChange={handleInputChange} required
                    />
           
                </div>

                <div class="form-group mb-3">
                    <div class="input-group-prepend" >  
                    <textarea className="input-group-text" class="form-control" aria-label="With textareaa" name="address" placeholder="Address"
                    value={values.address} 
                    onChange={handleInputChange} required/>
                    </div>
                </div>
                
                <div className="form-group mb-3">
                         <input type="submit" value="Save Data" className="btn btn-outline-primary btn-block-block"n/>                       
                </div>
              

     </form>
    
    );
}

export default ContactForm;