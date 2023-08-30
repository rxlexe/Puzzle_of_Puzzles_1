{\rtf1\ansi\ansicpg1252\cocoartf2708
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener("DOMContentLoaded", function() \{\
    const validCombinations = \{\
        "username1": "password1",\
        "username2": "password2",\
        "username3": "password3",\
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0
\cf0         "username4\'94: "password4\'94,\
        "username5\'94: "password5\'94,\
        "username6\'94: "password6\'94,\
        "username7\'94: "password7,\
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0
\cf0         "username8": "password8"\
    \};\
\
    const form = document.getElementById("authForm");\
    form.addEventListener("submit", function(event) \{\
        event.preventDefault();\
        const username = document.getElementById("username").value;\
        const password = document.getElementById("password").value;\
\
        if (validCombinations[username] === password) \{\
            document.getElementById("result").textContent = "Congratulations! You have passed the first test. Your next clue will be mailed to you in the next two weeks, but you will need this cipher to solve it: A=P";\
        \} else \{\
            document.getElementById("result").textContent = "Invalid username or password.";\
        \}\
    \});\
\});\
}