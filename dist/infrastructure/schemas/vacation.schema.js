"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vacation = void 0;
const typeorm_1 = require("typeorm");
const base_schema_1 = require("./base.schema");
const user_schema_1 = require("./user.schema");
let Vacation = class Vacation extends base_schema_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vacation.prototype, "reason", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Vacation.prototype, "start", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Vacation.prototype, "end", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_schema_1.User, (users) => users.vacations),
    (0, typeorm_1.JoinTable)({
        name: 'users_vacations',
        joinColumn: { name: 'vacation_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'user_id' },
    }),
    __metadata("design:type", Array)
], Vacation.prototype, "users", void 0);
Vacation = __decorate([
    (0, typeorm_1.Entity)({ name: 'vacations' })
], Vacation);
exports.Vacation = Vacation;
//# sourceMappingURL=vacation.schema.js.map