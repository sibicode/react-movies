import { rootReducer } from '../store/reducers'

export * from './movie'

export type RootState = ReturnType<typeof rootReducer>
