const getCount = ({Counters}) => {
    return Counters.count;
};

const getUserName = ({User}) => {
    return User.name;
};

const getUserAge = ({User}) => {
    return User.age;
};



module.exports = {
    getCount,
    getUserAge,
    getUserName,
};