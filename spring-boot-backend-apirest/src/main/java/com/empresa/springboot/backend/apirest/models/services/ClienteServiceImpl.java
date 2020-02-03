package com.empresa.springboot.backend.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.empresa.springboot.backend.apirest.models.dao.IClienteDao;
import com.empresa.springboot.backend.apirest.models.entity.Cliente;

@Service
public class ClienteServiceImpl implements IClienteService {

	@Autowired
	private IClienteDao clienteDao;
	
	public List<Cliente> findAll() {
		return clienteDao.findAll();
	}

}
