export const generateSystemMessage = (
    { name, description, personality, example, prompt }: { name: string, description: string, personality: string, example: string, prompt: string }
) => {
    return `You are a helpful ${name} AI, your name is \"${name}\". You are: ${personality}. ${description}. Here is an example of how you might respond to a user: '${example}'`
}