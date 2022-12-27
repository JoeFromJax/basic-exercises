//7

const closet = {
    clothes: [],
    putOnClothes: function(item) {
      if (this.clothes.includes(item)) {
        throw new Error("Already wearing", item);
      } else {
        this.clothes.push(item);
        console.log(this.clothes);
      }
    }
  };

closet.putOnClothes('hat');  // Output: ['hat']
closet.putOnClothes('shirt');  // Output: ['hat', 'shirt']
closet.putOnClothes('hat');  // Throws error: "Already wearing hat"