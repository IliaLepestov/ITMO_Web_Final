"use strict";
(function(){
    window.addEventListener("DOMContentLoaded", (function() {
        const userForm = document.getElementById("userform");
        if (userForm) {
            const username = userForm.elements["username"];
            if (username) {
                username.addEventListener("change", function(event){
                    if (this.validity.valid) {
                        document.getElementById('forNameCheck').src = "yes.jpeg";
                    } else {
                        document.getElementById('forNameCheck').src = "no.jpeg";
                    }
                    }
                );
            }
            const userage = userForm.elements["userage"];
            if (userage) {
                userage.addEventListener("change", function(event){
                    if (this.validity.valid) {
                        document.getElementById('forAgeCheck').src = "yes.jpeg";
                    } else {
                        document.getElementById('forAgeCheck').src = "no.jpeg";
                    }
                    }
                );
            }
            const usermail = userForm.elements["usermail"];
            if (usermail) {
                usermail.addEventListener("change", function(event){
                    if (this.validity.valid) {
                        document.getElementById('forMailCheck').src = "yes.jpeg";
                    } else {
                        document.getElementById('forMailCheck').src = "no.jpeg";
                    }
                    }
                );
            }
        } 
        userForm.addEventListener("submit", function(event){
            event.preventDefault();
        })
    }));
    }());
