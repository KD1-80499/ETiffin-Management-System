package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


import org.apache.commons.io.filefilter.FalseFileFilter;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = "password") // toString excluding password

public class UserEntity{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_id",nullable = false)
	private int userId;
	@Column(length = 255 ,name = "user_name",nullable = false)
	private String userName;
	@Column(length = 255,unique = true,nullable = false)
	private String email;
	@Column(length = 255, nullable = false)
	private String password;
	@Column(length = 10,unique = true,nullable = false)
	private String phone;
	@Enumerated(EnumType.STRING)
	@Column(length = 25)
	private UserRole role;
	@Column (length = 12,unique = true,nullable = false,name="aadhar_no")
	private String aadharNo;
}
