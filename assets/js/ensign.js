function changePage() {
    window.location.assign("./html/plansPage.html");
};

    function changePage2() {
        var Ensign = "Ensign Plan $39.99 500/500 Mbps";
        localStorage.setItem('Ensign', Ensign.value);
        window.location.assign("./html/cart.html");
    };

    
