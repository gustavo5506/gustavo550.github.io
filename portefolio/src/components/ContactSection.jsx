import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { cn } from "@/lib/utils";

export const ContactSection = () => {
    return <section className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get in <span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                If you have any questions or inquiries, feel free to reach out!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className='h-6 w-6 text-primary'/> {" "}
                            </div>
                            <div>
                                <h4 className='font-medium'> Email</h4>
                                <a href="mailto:gustavogomes042@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                                    gustavogomes042@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className='h-6 w-6 text-primary'/> {" "}
                            </div>
                            <div>
                                <h4 className='font-medium'> Phone</h4>
                                <a href="tel:+351926711229" className='text-muted-foreground hover:text-primary transition-colors'>
                                    +351 926711229
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className='h-6 w-6 text-primary'/> {" "}
                            </div>
                            <div>
                                <h4 className='font-medium'> Location</h4>
                                <a className='text-muted-foreground hover:text-primary transition-colors'>
                                    Portugal
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className='bg-card p-8 rounded-lg shadow-xs mb-8'>
                           <h3 className='font-semibold space-y-5'>Let's Talk</h3>
                           <div>I don’t use contact forms—just reach out directly. Whether you have a project in mind, want feedback on something I’ve built, or simply feel like chatting about tech, I’d love to hear from you.</div>
                        </div>
            </div>            
        </div>
    </section>
}