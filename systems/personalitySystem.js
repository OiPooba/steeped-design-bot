const { personalities } = require("../data/personalities");


// 🎲 Random helper
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


// 🎯 Get personalities by category
function getByCategory(category) {
  return personalities.filter(
    p => p.category === category
  );
}


// 🎲 Pick unique personalities
function pickUnique(list, amount) {

  const pool = [...list];
  const result = [];


  while(result.length < amount && pool.length){

    const index = Math.floor(
      Math.random() * pool.length
    );

    result.push(
      pool.splice(index,1)[0].name
    );

  }


  return result;

}



// 🎲 Standard single roll
function rollSingle(){

  return random(personalities).name;

}



// 🎭 Balanced personality roll
//
// Default:
// Positive + Neutral + Negative
//
// Small chance:
// Lean toward one category
//
// Very small chance:
// Pure category
//

function rollFull(){


  const positive = getByCategory("positive");
  const neutral = getByCategory("neutral");
  const negative = getByCategory("negative");


  const roll = Math.random();


  // 🌈 Normal balanced personality
  if(roll < 0.75){

    return {

      result:[

        random(positive).name,
        random(neutral).name,
        random(negative).name

      ]

    };

  }



  // 🟢 Positive leaning
  if(roll < 0.85){

    return {

      result:[

        random(positive).name,
        random(positive).name,
        random(neutral).name

      ]

    };

  }



  // 🔴 Negative leaning
  if(roll < 0.93){

    return {

      result:[

        random(negative).name,
        random(negative).name,
        random(neutral).name

      ]

    };

  }



  // ⚪ Neutral leaning
  if(roll < 0.97){

    return {

      result:[

        random(neutral).name,
        random(neutral).name,
        random(positive).name

      ]

    };

  }



  // 🌱 Pure Neutral
  if(roll < 0.985){

    return {

      result: pickUnique(neutral,3)

    };

  }



  // ☀️ Pure Positive
  if(roll < 0.995){

    return {

      result: pickUnique(positive,3)

    };

  }



  // 🌑 Pure Negative
  return {

    result: pickUnique(negative,3)

  };


}



// Optional category roll
function rollCategory(category){

  const pool = getByCategory(category);


  return {

    result: random(pool).name

  };

}



module.exports = {

  rollSingle,
  rollFull,
  rollCategory

};