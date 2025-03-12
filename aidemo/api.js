const OpenAI = require('openai')
const client = new OpenAI({ apiKey:""})

let apiTest = async ()=>{
    const completion = await client.chat.completions.create({
        model: "gpt-4o",
        messages:[
            {role:"assistant", content: "Write a description of coding bootcamps" },
        ]
    })

    console.log("Answer:", completion.choices[0].message.content)
}

apiTest()