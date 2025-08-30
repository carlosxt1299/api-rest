import { Injectable, NotFoundException } from '@nestjs/common';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  private clientes: Cliente[] = [];
  private idCounter = 1;

  create(createClienteDto: CreateClienteDto): Cliente {
    const nuevoCliente: Cliente = {
      id: this.idCounter++,
      ...createClienteDto,
    };
    this.clientes.push(nuevoCliente);
    return nuevoCliente;
  }

  findAll(): Cliente[] {
    return this.clientes;
  }

  findOne(id: number): Cliente {
    const cliente = this.clientes.find(c => c.id === id);
    if (!cliente) throw new NotFoundException('Cliente no encontrado');
    return cliente;
  }

  update(id: number, updateClienteDto: UpdateClienteDto): Cliente {
    const cliente = this.findOne(id);
    Object.assign(cliente, updateClienteDto);
    return cliente;
  }

  remove(id: number): void {
    const idx = this.clientes.findIndex(c => c.id === id);
    if (idx === -1) throw new NotFoundException('Cliente no encontrado');
    this.clientes.splice(idx, 1);
  }
}