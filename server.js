const PORT  = process.env.PORT || 3000;



module.exports = (application)=>{
application.listen(PORT, ()=>{
    console.log(`server listen on port ${PORT}...`);
}
);
};
