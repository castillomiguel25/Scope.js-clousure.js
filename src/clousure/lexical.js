const buildCount = (i) => {
    let count = i;
    const displaycount  = () => {
        console.log(count++);
    }
    return displaycount;
};

const mycount = buildCount(1);
mycount();
mycount();
mycount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount()