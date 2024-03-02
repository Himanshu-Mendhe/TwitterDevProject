import UserService from "../../src/services/user-service.js";
import UserRepository from "../../src/repository/user-repository.js";

jest.mock('../../src/repository/user-repository.js');

describe('user service signup Tests', () => {
    test("should successfully create an user", async() => {
        const data = {
            email: 'a@1b.com',
            password: '123',
            name: '321'
        };
        (UserRepository.prototype.create).mockReturnValue({...data, createdAt: '2024-03-03', updatedAt: '2024-03-03'})
        const service = new UserService();
        const response = await service.signup(data)

        expect(response.email).toBe(data.email);
    })
}) 