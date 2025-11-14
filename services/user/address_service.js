const addressRepository = require("../../repositories/user/address_repository");

class AddressService {
  create(data) {
    return addressRepository.create(data);
  }
  list() {
    return addressRepository.findAll();
  }
  get(id) {
    return addressRepository.findById(id);
  }
  update(id, data) {
    return addressRepository.update(id, data);
  }
  delete(id) {
    return addressRepository.delete(id);
  }
}

module.exports = new AddressService();
