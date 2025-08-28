export function StatsSection() {
  return (
    <section className="bg-background py-28">
      <div className="medical-container">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          <div className="text-left space-y-2" data-testid="stat-experience">
            <div className="medical-stat-number">15+</div>
            <div className="text-lg font-medium text-foreground">Years of Experience</div>
            <div className="text-muted-foreground">Combined medical expertise across our platform</div>
          </div>
          <div className="text-left space-y-2" data-testid="stat-clinics">
            <div className="medical-stat-number">20+</div>
            <div className="text-lg font-medium text-foreground">Partner Clinics</div>
            <div className="text-muted-foreground">Healthcare facilities using UniHealth</div>
          </div>
          <div className="text-left space-y-2" data-testid="stat-control">
            <div className="medical-stat-number">100%</div>
            <div className="text-lg font-medium text-foreground">Patient Data Control</div>
            <div className="text-muted-foreground">You own and control your medical records</div>
          </div>
        </div>
      </div>
    </section>
  );
}
