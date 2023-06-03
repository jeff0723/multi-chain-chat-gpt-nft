import { createSlice } from '@reduxjs/toolkit'

interface Agent {
    name: string
    description: string
    personality: string
    example: string
}
export interface ApplicationState {
    currentAgent: Agent | null
}
export const initialState: ApplicationState = {
    currentAgent: null,

}

const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        updateCurrentAgent(state, { payload: { currentAgent } }) {
            state.currentAgent = currentAgent
        },


    }
})

export const {
    updateCurrentAgent,
} = applicationSlice.actions
export default applicationSlice.reducer