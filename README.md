#API REST con NestJS

## 🎯 Objetivo

Este proyecto consiste en el diseño y construcción de un backend funcional utilizando **NestJS**, implementando una **API REST completa** para una entidad elegida, aplicando estrictamente la **Arquitectura por Capas**. El objetivo es demostrar la comprensión de la separación de responsabilidades entre Controladores, Servicios, DTOs y Entidades.

## 📋 Requisitos y Características

- **Creación del Proyecto**: Proyecto NestJS iniciado desde cero.
- **Entidad elegida**: Clientes
- **CRUD Completo**:
  - `GET /recurso` - Obtener todos los elementos.
  - `GET /recurso/:id` - Obtener un elemento por ID.
  - `POST /recurso` - Crear un nuevo elemento.
  - `PATCH /recurso/:id` - Actualizar un elemento existente.
  - `DELETE /recurso/:id` - Eliminar un elemento.
- **Arquitectura por Capas**:
  - **Controlador**: Maneja rutas y peticiones HTTP.
  - **Servicio**: Contiene la lógica de negocio.
  - **DTOs**: Incluye validaciones básicas con `class-validator`.
  - **Entidades**: Define la estructura de los datos.
- **Sin Base de Datos**: La persistencia se simula usando un array en memoria dentro del Servicio.

## 🚀 Tecnologías

- [NestJS](https://nestjs.com/)
- TypeScript
- class-validator

## 🛠️ Estructura del Proyecto

- `/src`
  - `/entidad` (Reemplaza por tu recurso)
    - `entidad.controller.ts`
    - `entidad.service.ts`
    - `dto/create-entidad.dto.ts`
    - `dto/update-entidad.dto.ts`
    - `entities/entidad.entity.ts`

## 📝 Notas

- Proyecto creado con fines educativos para comprender la Arquitectura por Capas en NestJS.
- ¡Sugerencias y contribuciones son bienvenidas!

---
