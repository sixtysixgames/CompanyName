/*
Copyright (C) 2021 sixtysixgames

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/* 
    Author     : sixtysixgames
*/

var aFNames = new Array(
    "Bina", "Bit", "Byte", "Com", "Comm", "Comms", "Compu", "Data", "Deci", "Decima", "Hard", "Hexa", "Info", "Inter", "Kilo", "Logi", "Macro", "Mega", "Micro", "Net", "PC", "Pro", "Soft", "Tech", "Techni", "Web"
);
    var aLNames = new Array(
    "bit", "bits", "byte", "bytes", "com", "comms", "data", "gistics", "grams", "grammes", "hard", "house", "info", "logic", "media", "micros", "net", "puters", "soft", "tech", "ware", "wares", "web", "world"
);

    function rand(i){ return Math.round(Math.random() * i); }

    function getName(){
        var aname = ""

        with(document.frmCompanyName){

            var fname = aFNames[rand(aFNames.length - 1)];
            var lname = aLNames[rand(aLNames.length - 1)];
            while( fname.toLowerCase() == lname.toLowerCase()){
                lname = aLNames[rand(aLNames.length - 1)];
            }
            if(rand(1) && lname.charAt(lname.length-1) != "s"){
                aname = aLNames[rand(aLNames.length - 1)];
                while( aname.toLowerCase() == lname.toLowerCase() ||
                    fname.toLowerCase() == aname.toLowerCase()){
                    aname = aLNames[rand(aLNames.length - 1)];
                }
            }
            txtCompanyName.value = fname + lname + aname;
        }
    }
