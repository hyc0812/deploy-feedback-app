import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'

export default function FeedbackForm(props) {
    
    const [text, setText] = useState('')
    const handleTextChange = (e)=> {
        setText(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder='write a review' value={text}/>
                    <Button type="submit" version='secondary'>Send</Button>
                </div>
            </form>
        </Card>
    )
}
