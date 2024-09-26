// components/searchbar/filterUsers.js

export const filterUsersByRole = (users, searchTerm, currentUser) => {
    if (!users || users.length === 0 || !currentUser) return [];

    const searchLower = searchTerm.toLowerCase();

    const filteredUsers = users.filter(user => {
        const matchesSearchTerm =
            user.firstName.toLowerCase().includes(searchLower) ||
            user.lastName.toLowerCase().includes(searchLower) ||
            user.email.toLowerCase().includes(searchLower) ||
            user.phoneNumber.includes(searchTerm);

        if (currentUser.role === 'admin') {
            return matchesSearchTerm;
        }

        if (currentUser.role === 'manager') {
            const isAssignedEmployee = user.assignedTo && user.assignedTo.toString() === currentUser._id.toString();
            const isAssignedInvestor = user.role === 'investor' && user.assignedTo && currentUser.assignedEmployees.some(emp => emp._id.toString() === user.assignedTo.toString());

            return matchesSearchTerm && (isAssignedEmployee || isAssignedInvestor);
        }

        if (currentUser.role === 'employee') {
            const isAssignedInvestor = user.role === 'investor' && user.assignedTo && user.assignedTo.toString() === currentUser._id.toString();
            return matchesSearchTerm && isAssignedInvestor;
        }

        return false;
    });

    return filteredUsers;
};
