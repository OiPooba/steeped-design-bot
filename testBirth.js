const {
    generateBirthCondition
} = require("./systems/birthConditionSystem");


// =====================
// TEST MATCHING PARENTS
// =====================

const mother = {

    dominant: {

        name:"Weak Joints",
        severity:"Mild",
        inheritanceGroup:"physical"

    },


    recessive:[

        {
            name:"Poor Hearing",
            severity:"Mild",
            inheritanceGroup:"sensory"
        }

    ]

};


const father = {

    dominant: {

        name:"Weak Joints",
        severity:"Mild",
        inheritanceGroup:"physical"

    },


    recessive:[

        {
            name:"Poor Hearing",
            severity:"Mild",
            inheritanceGroup:"sensory"
        }

    ]

};


console.log(
    "===== MATCHING PARENTS TEST ====="
);


for(let i = 0; i < 10; i++){

    const result =
        generateBirthCondition({

            characterName:
            "Willow",

            parentsKnown:true,

            mother,

            father

        });


    console.log(result);

}
