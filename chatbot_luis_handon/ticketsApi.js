var tickets = [];
var lastTicketId = 1;

module.exports = {
    create: (req, res) => {
        console.log('Ticket received: ', req.body);
        let ticketId = lastTicketId++;
        var ticket = req.body;
        ticket.id = ticketId;
        ticket.status = 'Pending';
        tickets.push(ticket);

        res.send(ticketId.toString());
    },
    status: (req, res) => {
        var id = req.body.id;
        var status;

        for (var i in tickets) {
            if (i.id == id) {
                status = i.status;
            } else {
                status = 'null';
            }
        }
        res.send(status);
    }
}