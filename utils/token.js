import jwt from 'jsonwebtoken'

const generateToken = (id) => {
    return jwt.sign({ id: id }, 'secret')
}

export default generateToken