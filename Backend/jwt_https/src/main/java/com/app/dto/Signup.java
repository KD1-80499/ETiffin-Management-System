package com.app.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.app.entities.UserRole;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Signup {
	@JsonProperty(access = Access.READ_ONLY) // this property only used during ser.
	private int userId;
	@NotBlank(message = "User Name required")
	private String userName;
	@Email(message = "Invalid Email!!!")
	private String email;
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
	@NotBlank(message="Phone number is required")
	private String phone;
	private UserRole role;
	@NotBlank(message="Aadhar no must be provided")
	private String aadharNo;
	
	public Signup(String userName,String email,String password,String phone,UserRole role,String aadharNo)
	{
		super();
		this.userName=userName;
		this.email=email;
		this.password=password;
		this.phone=phone;
		this.role=role;
		this.aadharNo = aadharNo;
		
	}
}

