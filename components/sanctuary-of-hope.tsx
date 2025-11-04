import { Button } from "@/components/ui/button"

export function SanctuaryOfHope() {
  return (
    <section className="w-full bg-secondary text-foreground py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            The Poor You Will Have With You Always
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary">
            SANCTUARY OF HOPE
          </h3>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-foreground">
          <p>
            Through our SANCTUARY OF HOPE we minister to the spiritual needs of those that we serve in our inner city neighborhood that are looking to Christianity for a faith solution. As a diverse community of Christ-Followers we welcome those suffering from the constant grind of poverty and hardship. We are a safe place where they can believe and belong. We are not simply a place where the poor are served, but a place where they can serve. We are a church for the poor, by the poor, with the poor and of the poor. We are a place where misfits fit.
          </p>
        </div>

        <div className="flex justify-center pt-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Donate Today
          </Button>
        </div>
      </div>
    </section>
  )
}
