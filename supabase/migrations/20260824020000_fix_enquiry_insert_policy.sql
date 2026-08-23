alter table public.enquiries enable row level security;

grant insert (name, email, phone, service, budget, details)
on public.enquiries
to anon, authenticated;

drop policy if exists "Anyone can submit an enquiry" on public.enquiries;

create policy "Anyone can submit an enquiry"
on public.enquiries
for insert
to anon, authenticated
with check (true);
