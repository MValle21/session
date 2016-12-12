module.exports.config = function() {
    return {
        RefreshTokenTable: 'test-KODemoTokens',
        UsersTable: 'test-KODemoUsers',
        RefreshTokenExpiration: '30 days',
        AccessTokenExpiration: '1h',
        LogLevel: 'debug',
        //NOTE: DO NOT STORE SALT IN CODE --> this is for demo puposes only
        //in production consider an encrypted value in code and store the decryption key in AWS KMS
        ApiIdSalt: '{apiId_salt}',
        PasswordSalt: '{password_salt}',
        VPC: {}
    };
};
