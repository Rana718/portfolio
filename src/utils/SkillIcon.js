const getSkillIcon = (skill) => {
    const skillIconMap = {
        'Next.js': 'nextjs.svg',
        'React': 'react.svg',
        'React Native': 'reactnative.svg',
        'Node.js': 'nodejs.svg',
        'JavaScript': 'javascript.svg',
        'TypeScript': 'typescript.svg',
        'Python': 'python.svg',
        'Golang': 'golang.svg',
        'Go': 'golang.svg',
        'FastAPI': 'fastapi.svg',
        'Fiber': 'fiber.svg',
        'Prisma': 'prisma.svg',
        'Redis': 'redis.svg',
        'MongoDB': 'mongodb.svg',
        'PostgreSQL': 'postgresql.svg',
        'MySQL': 'mysql.svg',
        'SQLite': 'sqlite.svg',
        'Docker': 'docker.svg',
        'TailwindCSS': 'tailwindcss.svg',
        'Vite': 'vite.svg',
        'Clerk': 'clerk.svg',
        'Expo': 'expo.svg',
        'expo': 'expo.svg',
        'Gemini': 'gemini.svg',
        'LangChain': 'langchain.svg',
        'Pinecone': 'pinecone.svg',
        'Socket.IO': 'socketio.svg',
        'Selenium': 'selenium.svg',
        'Zustand': 'zustand.svg',
        'Gorilla WebSockets': 'websocket.svg',
        'WebSockets': 'websocket.svg',
        'WebSocket': 'websocket.svg',
        'RabbitMQ': 'rabbitmq.svg',
        'Kubernetes': 'kubernetes.svg',
        'Nginx': 'nginx.svg',
        'nginx': 'nginx.svg',
        'gRPC': 'grpc.svg',
        'Express': 'expressjs.svg',
        'Express.js': 'expressjs.svg',
        'Flask': 'flask.svg',
        'NativeWind': 'tailwindcss.svg',
        'BullMQ': 'redis.svg',
        'Supabase': 'supabase.svg',
        'Kafka': 'kafka.svg',
        'CI/CD': 'githubactions.svg',
        'GitHub Actions': 'githubactions.svg',
        'AWS': 'aws.svg',
    };

    return skillIconMap[skill] || null;
};


export {
    getSkillIcon
}