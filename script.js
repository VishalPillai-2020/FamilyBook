var pictures=[
"https://scontent.fcok2-1.fna.fbcdn.net/v/t1.0-0/c0.136.206.206a/p206x206/66319034_2570257856339736_5028337407083151360_n.jpg?_nc_cat=110&_nc_sid=da31f3&_nc_ohc=DgK3XydNbP8AX-hMbmN&_nc_ht=scontent.fcok2-1.fna&oh=e8a8bf9d51dfff734dcb5edc801f5d75&oe=5F4ADC5A",
"https://scontent.fcok2-1.fna.fbcdn.net/v/t1.0-0/c0.146.206.206a/p206x206/71958785_3627381033954530_97537504701317120_o.jpg?_nc_cat=108&_nc_sid=da31f3&_nc_ohc=-2Cpym4CSjwAX9O92t0&_nc_ht=scontent.fcok2-1.fna&oh=fbaf9249b0512e58af5e57e663a3d19b&oe=5F48E080",
"https://scontent.fcok2-1.fna.fbcdn.net/v/t1.0-0/c0.149.206.206a/p206x206/60580461_2466779400020916_8310836063643893760_n.jpg?_nc_cat=110&_nc_sid=da31f3&_nc_ohc=8i2KM0UIirYAX_EIMPv&_nc_ht=scontent.fcok2-1.fna&oh=6a055a8de13ca6b78779243ec621beb2&oe=5F4ABD35"
];

var description=[
    "My Mother <br> <br> Asha Sasi",
    "My Father <br> <br> Vimal Kumar",
    "Myself <br> <br> Vishal.V.Pillai"
];
var i=0;
function next () {
document.getElementById ("image1").src = pictures[i];
document.getElementById
("intro").innerHTML = description[i];
i++;
if (i==3) {
i=0;
}
}