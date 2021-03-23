db = connect("localhost:27017/celebs");

db.celebs.drop();
db.categories.drop();

db.celebs.insertMany([
    {
        name: "Manny Pacquiao", 
        age: 42, 
        birthplace: {
            region: 'Kabawe',
            country: 'Philippines'
        },
        occupation: {
            category: 'sports',
            jobs: ['professional boxer']
        }, 
        relationshipStatus: "married", 
        children: ['Michael', 'Emmanuel Jr', 'Mary Divine Grace', 'Israel', 'Queen Elizabeth'],
        awards: ['many'],
        achievements: ['many']
    },
    {
        name: "Rachel Weisz", 
        age: 51, 
        birthplace: {
            region: 'Westminster',
            country: 'London'
        },  
        occupation: {
            category: 'arts',
            jobs: ['actress']
        }, 
        relationshipStatus: "married", 
        children: ['Henry'],
        awards: ['many'],
        achievements: ['many']
    },
    {
        name: "Bruno Mars", 
        age: 35, 
        birthplace: {
            region: 'Honolulu',
            country: 'United States'
        },
        occupation: {
            category: 'arts',
            jobs: ['singer', 'songwriter']
        },  
        relationshipStatus: "partner", 
        children: [],
        awards: ['many'],
        achievements: ['many']
    },
    {
        name: "Nicole Scherzinger", 
        age: 42, 
        birthplace: {
            region: 'Honolulu',
            country: 'United States'
        },
        occupation: {
            category: 'arts',
            jobs: ['singer', 'songwriter']
        }, 
        relationshipStatus: "single", 
        children: [],
        awards: ['many'],
        achievements: ['many']
    },
    {
        name: "Rob Schneider", 
        age: 57, 
        birthplace: 
        {
            region: 'San Francisco',
            country: 'United States'
        },
        occupation: {
            category: 'arts',
            jobs: ['actor', 'comedian']
        },
        relationshipStatus: "married", 
        children: ['Elle King', ' Miranda Scarlett', 'Madeleine Robbie'],
        awards: ['many'],
        achievements: ['many']
    },
    {
        name: "Arnel Pineda", 
        age: 53, 
        birthplace: {
            region: 'Sampatoc',
            country: 'Philippines'
        },
        occupation: {
            category: 'arts',
            jobs: ['singer']
        }, 
        relationshipStatus: "partner", 
        children: [],
        awards: ['many'],
        achievements: ['many']
    },
    {
        name: "Imelda Marcos", 
        age: 91, 
        birthplace: {
            region: 'Manila',
            country: 'Philippines'
        },
        occupation: {
            category: 'politics',
            jobs: ['First Lady']
        }, 
        relationshipStatus: "partner", 
        children: [],
        awards: ['many'],
        achievements: ['many']
    }
])

db.categories.insertMany([
    { category: 'sports' },
    { category: 'arts' },
    { category: 'politics'}
])