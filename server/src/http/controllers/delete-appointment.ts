import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeDeleteAppointment } from "../../use-cases/factory/make-delete-appointment";
import { UnauthorizedError } from "../../errors/unauthorized";

export async function deleteAppointmentController(request: FastifyRequest, reply: FastifyReply){
      
    const doctorId = request.user.id

    if (!doctorId) {
        throw new UnauthorizedError()
    }

    console.log(doctorId)

    const deleteZodSchema = z.object({
        id: z.string()
    })

    const {id} = deleteZodSchema.parse(request.params)

    console.log("CHEGOU AQUI", id)
    try{
        const makeDelete = MakeDeleteAppointment();
        
        const deleteAppointment =  await makeDelete.execute({id})

        return reply.status(202).send("Deleted with success!")

    }catch(err){
        throw new Error("Error to delete ")
    }
}