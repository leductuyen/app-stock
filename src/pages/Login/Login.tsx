import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
const Login = () => {
    const [formValues, setFormValues] = useState('')
    console.log('formValues', formValues)
    const handleOnChang = (e: any) => {
        const { value, name } = e.target
        setFormValues({ ...formValues, [name]: value })
    }
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter email"
                    value={formValues}
                    onChange={handleOnChang}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Password"
                    value={formValues}
                    onChange={handleOnChang}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
export default Login
