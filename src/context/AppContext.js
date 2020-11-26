import {createContext} from 'react'

const defaultValue = {
    message: 'Add to Favorites'
}

const AppContext = createContext(defaultValue)

export default AppContext
