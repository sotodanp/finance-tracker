import { useState } from 'react'
import styles from './Signup.module.css'
import { useSignup } from '../../hooks/useSignup'



const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [confirmPassword, setConfirmPassword] = useState('')
    const [displayName, setDisplayName] = useState('')

    const { signup, isPending, error } = useSignup()


    const handleSubmit = (e) => {
        e.preventDefault();

        // if (password !== confirmPassword) {
        //     alert('Passwords do not match.')
        //     setPassword('')
        //     setConfirmPassword('')
        // }

        signup(email, password, displayName)



    }

    return (
        <form onSubmit={handleSubmit} className={styles['signup-form']}>
            <h2>Signup</h2>
            <label>
                <span>Email:</span>
                <input type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
            </label>
            <label>
                <span>Password:</span>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
            </label>
            {/* <label>
                <span>Confirm Password:</span>
                <input
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    required
                />
            </label> */}
            <label>
                <span>Username:</span>
                <input
                    type="text"
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                    required
                />
            </label>
            {!isPending && <button className='btn'>Signup</button>}
            {isPending && <button className='btn' disabled>loading...</button>}
            {error && <p>{error}</p>}
        </form>
    )
}

export default Signup
