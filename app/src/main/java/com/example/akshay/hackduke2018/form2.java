package com.example.akshay.hackduke2018;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.EditText;

public class form2 extends AppCompatActivity {

    EditText firstName,lastName,email,password,skills,contactNumber;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_form2);

        firstName = findViewById(R.id.editTextFirstName);
        lastName = findViewById(R.id.editTextLastName);
        email = findViewById(R.id.editTextEmail);
        contactNumber = findViewById(R.id.editTextContactNumber);
        skills = findViewById(R.id.editTextSkills);


    }
}
