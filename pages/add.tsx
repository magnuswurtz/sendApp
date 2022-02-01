import type { NextPage } from 'next'
import Button from '../components/Button'
import AddForm from '../components/AddForm'

const Add:NextPage = () => {
    return (
    <div className='items-center justify-center'>
        <h1 className='headline'>Add page</h1>
        <AddForm></AddForm>
        <Button text="Go Back" link="/"></Button>
    </div>)
}

export default Add