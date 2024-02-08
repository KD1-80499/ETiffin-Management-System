package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
public class UserEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId; 
	
	@Column(length = 255, name = "user_name",nullable = false)
	private String userName;
	
	@Column(length = 255, unique = true, nullable = false)
	private String email;
	
	@Column(length = 255, nullable = false)
	private String password;
	
	@Column(length = 25,nullable = false,unique = true)
	private String phone;
	
	@Column(length = 12,nullable = false,unique = true)
	private String aadharNo;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 30)
	private UserRole role;
}
